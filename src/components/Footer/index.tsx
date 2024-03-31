import React from "react";
import styles from "./Footer.module.scss";
import {
  FileIcon,
  InfoIcon,
  LogoColorlessIcon,
  LogoIcon,
  VideoIcon,
  YouTubeIcon,
} from "../Icons";
import Button from "../Button";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.divider}></div>
      <div className={styles.contacts}>
        <div>
          <LogoIcon />
          <div>
            <h5>8 800 841-95-95</h5>
            <span>Служба поддержки</span>
          </div>
          <div>
            <h5>support@sport.ru</h5>
            <span>Служба поддержки</span>
          </div>
        </div>
        <div>
          <h5>Вакансии</h5>
          <h5>Блог</h5>
          <h5>Акции</h5>
          <Button ghost padding="16px 24px">
            Предложить идею
          </Button>
        </div>
      </div>
      <div className={styles.divider}></div>
      <table>
        <thead>
          <tr>
            <th>Женщинам</th>
            <th>Мужчинам</th>
            <th>Детям</th>
            <th>Виды спорта</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Одежда</td>
            <td>Одежда</td>
            <td>Одежда</td>
            <td>Велоспорт</td>
          </tr>
          <tr>
            <td>Обувь</td>
            <td>Обувь</td>
            <td>Обувь</td>
            <td>Туризм</td>
          </tr>
          <tr>
            <td>Аксессуары</td>
            <td>Аксессуары</td>
            <td>Аксессуары</td>
            <td>Тренажеры и фитнес</td>
          </tr>
          <tr>
            <td>Белье</td>
            <td>Белье</td>
            <td>Белье</td>
            <td>Командные виды спорта</td>
          </tr>
          <tr>
            <td>Bra fitting</td>
            <td></td>
            <td>Игрушки</td>
            <td>Самокаты</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>Малыши</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <div className={styles.divider}></div>
      <div className={styles.copyright}>
        <div className={styles.other}>
          <span>
            <FileIcon />
            PDF презентация
          </span>
          <span>
            <VideoIcon />
            Видео инструкция
          </span>
          <span>
            <InfoIcon />
            FAQ
          </span>
          <span className={styles.active}>
            <YouTubeIcon />
            Мы на YouTube
          </span>
          <span>Политика конфиденциальности</span>
          <span>Лицензионное соглашение</span>
        </div>
        <div className={styles.personalData}>
          Настоящая Политика обработки персональных данных разработана в
          соответствии с Конституцией Российской Федерации, Трудовым кодексом
          Российской Федерации, Гражданским кодексом Российской Федерации,
          Федеральным законом от 27 июля 2006 года 149-ФЗ "Об информации,
          информационных технологиях и о защите информации",
        </div>
        <div className={styles.logo}>
          <LogoColorlessIcon />
          <h6>Разработка платформы</h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;
