import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {useHistory} from "react-router-dom";
import i18n from "../i18n";

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Button = styled(motion.button)`
  margin: 10px;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  outline: none;
  &:hover {
    background: rgba(255, 255, 255, 0.8);
  }
`;

const Title = styled(motion.h1)`
  font-size: 2em;
  margin-bottom: 20px;
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.5, duration: 1.5 } }
};

const buttonVariants = {
  hover: { scale: 1.1, transition: { yoyo: Infinity, duration: 0.3 } }
};


const LanguageSelectionPage = () => {
  const history = useHistory();
  const setLanguage = (lang) => {
    i18n.changeLanguage(lang)
      .then(() => {
        history.push('/main'); // 언어 변경 후 메인 페이지로 이동
      })
      .catch(error => {
        console.error('Language changing error:', error);

      });
  };


  return (
    <Container
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Title>Welcome!</Title>
      <Title>안녕하세요!</Title>
      <Button
        whileHover="hover"
        variants={buttonVariants}
        onClick={() => setLanguage('en')}
      >
        English
      </Button>
      <Button
        whileHover="hover"
        variants={buttonVariants}
        onClick={() => setLanguage('ko')}
      >
        한국어
      </Button>
    </Container>
  );
};

export default LanguageSelectionPage;
