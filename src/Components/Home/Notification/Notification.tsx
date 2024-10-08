import React, { useState, useEffect, useRef, useMemo } from 'react';
import * as S from '@/Components/Home/Notification/Notification.style';
import CustomAlert from '@/Components/Alert/Alert';
import Point from '@/assets/image/home/point.svg';
import Emoji from "@/assets/image/home/emoji.svg";
import NotificationImg from "@/assets/image/home/notification.svg";
import CorrectionImg from '@/assets/image/home/Correction.svg';
import AddEmoji from '@/Components/Home/Notification/Emoji/emojipicker';
import { SeugiCustomAxios } from '@/Api/SeugiCutomAxios';
import { EmojiClickData } from 'emoji-picker-react';
import CreateNotice from '@/Components/Home/Notification/CreateNotice/CreateNotice';
import ChangeNotice from './ChangeNotice/ChangeNotice';
import { useUserContext } from '@/Contexts/userContext';

interface EmojiItem {
    emoji: string;
    userId: number;
}

interface EmojiDisplayItem {
    emoji: string;
    count: number;
    liked: boolean;
}

interface NotificationItem {
    id: number;
    userName: string;
    userId: number;
    lastModifiedDate: string;
    title: string;
    content: string;
    emoji: EmojiItem[];
    createdDate: string;
}

interface FormattedNotificationItem extends NotificationItem {
    emojiDisplay: EmojiDisplayItem[];
}

const Notification: React.FC = () => {
    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);
        const year = String(date.getFullYear()).slice(2);
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}${month}${day}`;
    };
    const user = useUserContext();
    const workspaceId = window.localStorage.getItem('workspaceId');
    const [notifications, setNotifications] = useState<NotificationItem[]>([]);
    const [isEmojiPickerVisible, setEmojiPickerVisible] = useState<boolean>(false);
    const [activeNotification, setActiveNotification] = useState<number | null>(null);
    const [isCreateNoticeVisible, setCreateNoticeVisible] = useState<boolean>(false);
    const [userRole, setUserRole] = useState<string | null>(null);
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const CreateNoticeRef = useRef<HTMLDivElement>(null);
    const ChangeNoticeRef = useRef<HTMLDivElement>(null);
    const [changeNoticeId, setChangeNoticeId] = useState<number | null>(null);

    const formattedNotifications: FormattedNotificationItem[] = useMemo(() => {
        return notifications.map((notification: NotificationItem) => {
            let emojiDisplay: EmojiDisplayItem[] = [];
            notification.emoji.forEach((emoji: EmojiItem) => {
                const existEmoji = emojiDisplay.find((item) => item.emoji === emoji.emoji);
                if (existEmoji) {
                    existEmoji.count += 1;
                } else {
                    emojiDisplay.push({
                        emoji: emoji.emoji,
                        count: 1,
                        liked: false,
                    });
                }
            });
            emojiDisplay = emojiDisplay.map((emojiItem) => {
                const selectedEmoji = notification.emoji.find(emoji => emoji.emoji === emojiItem.emoji && user.id === emoji.userId);
                if (selectedEmoji) {
                    return {
                        ...emojiItem,
                        liked: true,
                    };
                }
                return emojiItem;
            });
            return {
                ...notification,
                emojiDisplay,
            }
        });
    }, [notifications, user]);

    const getNotification = async () => {
        try {
            const res = await SeugiCustomAxios.get(`/notification/${workspaceId}?page=0&size=20`);
            setNotifications(res.data.data);
        } catch (error) {
            console.error('Failed to load notifications:', error);
        }
    };

    useEffect(() => {
        const role = window.localStorage.getItem('Role');
        setUserRole(role);
    }, []);

    useEffect(() => {
        getNotification();
    }, []);

    useEffect(() => {
        if (userRole === 'STUDENT') {
            setShowAlert(true);
        }
    }, [userRole]);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as Node | null;

            if (
                (CreateNoticeRef.current && !CreateNoticeRef.current.contains(target)) &&
                (ChangeNoticeRef.current && !ChangeNoticeRef.current.contains(target)) &&
                isEmojiPickerVisible
            ) {
                setEmojiPickerVisible(false);
                setActiveNotification(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isEmojiPickerVisible]);

    const handleCorrectionClick = () => {
        if (userRole === 'STUDENT') {
            setShowAlert(true);
            return;
        }
        setCreateNoticeVisible(true);
    };

    const handleAddEmojiClick = (notificationIndex: number) => {
        if (activeNotification === notificationIndex && isEmojiPickerVisible) {
            setEmojiPickerVisible(false);
            setActiveNotification(null);
        } else {
            setActiveNotification(notificationIndex);
            setEmojiPickerVisible(true);
        }
    };

    const handleEmojiClick = async (parentKey: number, emoji: EmojiDisplayItem) => {
        try {
            const updatedNotifications = notifications.map((notification, index) => {
                if (index !== parentKey) {
                    return notification;
                }
                const existingEmoji = notification.emoji.find(emojiItem => emojiItem.userId === user.id && emojiItem.emoji === emoji.emoji);
                return {
                    ...notification,
                    emoji: existingEmoji
                        ? notification.emoji.filter(emojiItem => emojiItem.userId !== user.id || emojiItem.emoji !== emoji.emoji)
                        : notification.emoji.concat({ emoji: emoji.emoji, userId: user.id }),
                }
            });
            setNotifications(updatedNotifications);
            await SeugiCustomAxios.patch(`/notification/emoji`, {
                notificationId: notifications[parentKey].id,
                emoji: emoji.emoji,
            });
        } catch (error) {
            console.error(error);
            setNotifications(notifications);
        }
    };

    const handleEmojiSelect = async (emoji: EmojiClickData) => {
        try {
            if (activeNotification !== null) {
                const notification = notifications[activeNotification];

                const updatedNotifications = notifications.map((notification, index) => {
                    if (index !== activeNotification) {
                        return notification;
                    }
                    const existingEmoji = notification.emoji.find(emojiItem => emojiItem.userId === user.id && emojiItem.emoji === emoji.emoji);
                    return {
                        ...notification,
                        emoji: existingEmoji
                            ? notification.emoji.filter(emojiItem => emojiItem.userId !== user.id || emojiItem.emoji !== emoji.emoji)
                            : notification.emoji.concat({ emoji: emoji.emoji, userId: user.id }),
                    }
                });

                setNotifications(updatedNotifications);
                await SeugiCustomAxios.patch(`/notification/emoji`, {
                    notificationId: notification.id,
                    emoji: emoji.emoji,
                });
            }
        } catch (error) {
            console.error(error);
            setNotifications(notifications);
        } finally {
            setEmojiPickerVisible(false);
            setActiveNotification(null);
        }
    };

    const handleActionButtonClick = (notificationId: number) => {
        setChangeNoticeId(prev => (prev === notificationId ? null : notificationId));
    };

    const refreshNotifications = () => {
        getNotification();
    };

    return (
        <S.LeftContainer>
            {isCreateNoticeVisible && (
                <div ref={CreateNoticeRef}>
                    <CreateNotice
                        onClose={() => setCreateNoticeVisible(false)}
                        refreshNotifications={refreshNotifications}
                    />
                </div>
            )}
            {showAlert && (
                <CustomAlert
                    titletext="권한이 없습니다"
                    subtext='선생님만 할 수 있는 작업입니다.'
                    buttontext="닫기"
                    onClose={() => setShowAlert(false)}
                    position="top-right"
                />
            )}
            <S.NotificationContainer>
                <S.NotificationTitleContainer>
                    <S.NotificationLogo src={NotificationImg} />
                    <S.NotificationTitle>공지</S.NotificationTitle>
                </S.NotificationTitleContainer>
                <S.ArrowLButton onClick={handleCorrectionClick}>
                    <S.NArrowLogo src={CorrectionImg} />
                </S.ArrowLButton>
            </S.NotificationContainer>
            <S.NotificationBox>
                {formattedNotifications.length > 0 ? (
                    formattedNotifications.map((item, parentKey) => (
                        <S.NotificationWrapper key={item.id}>
                            <S.NotificationContentAuthor>
                                <S.NotificationContentAuthorSpan> {item.userName} · {formatDate(item.lastModifiedDate)}
                                    {/* {item.createdDate !== item.lastModifiedDate && (
                                        <S.EditedLabel>(수정됨)</S.EditedLabel> 
                                    )} */}
                                </S.NotificationContentAuthorSpan>
                                <S.NotificationActionButton onClick={() => handleActionButtonClick(item.id)}>
                                    <S.NotificationActionButtonimg src={Point} />
                                </S.NotificationActionButton>
                            </S.NotificationContentAuthor>
                            <S.NotificationContentTitle>
                                {item.title}
                            </S.NotificationContentTitle>
                            <S.NotificationContentDescription>
                                {item.content}
                            </S.NotificationContentDescription>
                            <S.NotificationEmojiBox>
                                <S.NotificationAddEmojiButton onClick={() => handleAddEmojiClick(parentKey)} className='AddEmojiButton'>
                                    <S.NotificationAddEmoji src={Emoji} />
                                </S.NotificationAddEmojiButton>
                                {item.emojiDisplay.map((emoji, childKey) => (
                                    <S.NotificationEmojiWrapper
                                        onClick={() => handleEmojiClick(parentKey, emoji)}
                                        key={childKey}
                                        className={emoji.liked ? "Clicked" : ""}
                                    >
                                        <S.NotificationEmojiCount
                                            className={emoji.liked ? "Clicked" : ""}
                                        >
                                            {emoji.emoji} {emoji.count}
                                        </S.NotificationEmojiCount>
                                    </S.NotificationEmojiWrapper>
                                ))}
                            </S.NotificationEmojiBox>
                            {isEmojiPickerVisible && activeNotification === parentKey && (
                                <AddEmoji
                                    isOpened={isEmojiPickerVisible}
                                    setIsOpened={setEmojiPickerVisible}
                                    onSelect={handleEmojiSelect}
                                />
                            )}
                            {changeNoticeId === item.id && (
                                <ChangeNotice
                                    onClose={() => handleActionButtonClick(item.id)}
                                    notificationId={item.id}
                                    userId={item.userId}
                                    refreshNotifications={refreshNotifications}
                                />
                            )}
                        </S.NotificationWrapper>
                    ))
                ) : (
                    <S.NoNotification>알림이 없습니다.</S.NoNotification>
                )}
            </S.NotificationBox>
        </S.LeftContainer>
    );
};

export default Notification;
