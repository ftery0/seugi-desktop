import React from 'react';
import * as S from '@/components/CreateSchool/CreateSchool.style';
import Button from '@/components/button/Button';

const CreateSchool = () => {
    return (
        <S.CreateSchoolMain>
            <S.CreateSchoolContainer>
                <S.TitleContainer>
                    <S.Title>새 학교 등록</S.Title>
                </S.TitleContainer>
                <S.InputImg></S.InputImg>
                <S.InputContainer>
                    <S.InputBox>
                        <S.SubtitleContainer>
                            <S.Subtitle>학교 이름 <S.RedStar>*</S.RedStar></S.Subtitle>
                        </S.SubtitleContainer>
                        <S.TextField placeholder='학교 이름을 입력해주세요'></S.TextField>
                    </S.InputBox>
                </S.InputContainer>
                <S.ButtonContainer>
                    <Button />
                </S.ButtonContainer>
            </S.CreateSchoolContainer>
        </S.CreateSchoolMain>
    )
}

export default CreateSchool;