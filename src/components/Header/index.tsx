import styles from "./Header.module.scss";
import Button from "../Button";
import Input from "../Input";
import {
  BellIcon,
  PercentIcon,
  LogoIcon,
  BurgerIcon,
  CrossIcon,
  LensIcon,
  CartIcon,
  ChevronDownIcon,
  MessageCircleIcon,
  FavoriteIcon,
} from "../Icons";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.upperHeader}>
        <LogoIcon />
        <Button
          title="Меню"
          width="128px"
          height="48px"
          gap="12px"
          padding="24px"
        >
          <BurgerIcon />
        </Button>
        <Input placeholder="Название запроса">
          <CrossIcon />
          <LensIcon />
        </Input>
        <BellIcon />
        <div className={styles.divider} />
        <FavoriteIcon />
        <Button title="144 235₽" ghost gap="12px" padding="12px 24px">
          <CartIcon />
        </Button>
        <div className={styles.profileInfo}>
          <img
            src="src\assets\images\Avatar.png"
            alt="Avatar"
            className={styles.avatar}
          ></img>
          <h6>Ермаков Е.</h6>
          <ChevronDownIcon />
        </div>
      </div>
      <div className={styles.lowerHeader}>
        <div>
          <h6>Мои заказы</h6>
          <h6>Сотрудники</h6>
          <h6>Шаблоны заказов</h6>
          <h6>Обращения</h6>
        </div>
        <div>
          <Button title="Ваш менеджер" ghost gap="8px" padding="8px 16px">
            <MessageCircleIcon />
          </Button>
          <Button title="Акции" white gap="16px">
            <PercentIcon />
          </Button>
          <Button title="Блог" white />
        </div>
      </div>
    </header>
  );
};

export default Header;
