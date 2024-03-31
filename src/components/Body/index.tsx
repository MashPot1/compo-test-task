import React from "react";
import styles from "./Body.module.scss";
import Button from "../Button";
import Toggle from "../Toggle";
import {
  CartItemIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  MinusIcon,
  PlusIcon,
} from "../Icons";
import LikeButton from "../LikeButton";

const Body = () => {
  const [count, setCount] = React.useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div className={styles.body}>
      <span className={styles.breadCrumbs}>
        Каталог / Обувь / Кроссовки / Беговые
      </span>
      <h2>Кроссовки мужские Skechers Sunny Dale</h2>
      <div className={styles.product}>
        <div className={styles.productImages}>
          <img
            src="src\assets\images\Skecher_1.png"
            alt="Skecher_1"
            className={styles.mainImage}
          ></img>
          <div style={{ display: "flex", flexDirection: "row", gap: "16px" }}>
            <Button ghost width="38px" height="64px">
              <ArrowLeftIcon />
            </Button>
            <div className={styles.images}>
              <Button ghost>
                <img
                  src="src\assets\images\Skecher_2.png"
                  alt="Skecher_2"
                ></img>
              </Button>
              <Button ghost>
                <img
                  src="src\assets\images\Skecher_3.png"
                  alt="Skecher_3"
                ></img>
              </Button>
              <Button ghost>
                <img
                  src="src\assets\images\Skecher_4.png"
                  alt="Skecher_4"
                ></img>
              </Button>
              <Button ghost>
                <img
                  src="src\assets\images\Skecher_5.png"
                  alt="Skecher_5"
                ></img>
              </Button>
            </div>
            <Button ghost width="38px" height="64px">
              <ArrowRightIcon />
            </Button>
          </div>
        </div>
        <div className={styles.productInfo}>
          <div className={styles.productDetails}>
            <div className={styles.productParams}>
              <div className={styles.productPrice}>
                <span>166 534.00 цена без скидки</span>
                <h1>
                  122 566 ₽ <h5>-15%</h5>
                </h1>
              </div>
              <div className={styles.productPackagingInfo}>
                <h6>12 штук в уп.</h6>
                <Toggle />
                <span>Заказ упаковкой</span>
              </div>
              <div className={styles.divider}></div>
              <div className={styles.productDeliveryInfo}>
                <div>
                  <h6>Завтра</h6>
                  <span>Доставка</span>
                </div>
                <div>
                  <h6>7 шт.</h6>
                  <span>Тарасовка</span>
                </div>
                <div>
                  <h6>7 шт.</h6>
                  <span>Тарасовка</span>
                </div>
              </div>
              <div className={styles.buttons}>
                {!count ? (
                  <Button
                    title="В корзину"
                    gap="12px"
                    padding="16px 83px"
                    onClick={increment}
                  >
                    <CartItemIcon />
                  </Button>
                ) : (
                  <div className={styles.count}>
                    <Button onClick={decrement} white padding="16px">
                      <MinusIcon />
                    </Button>
                    <span>{count} штуки</span>
                    <Button onClick={increment} white padding="16px">
                      <PlusIcon />
                    </Button>
                  </div>
                )}
                <LikeButton />
              </div>
            </div>

            <div className={styles.divider}></div>

            <div className={styles.productSpecs}>
              <h4>Характеристики</h4>
              <div>
                <div>
                  <h6>ELC00696</h6>
                  <span>Код поставщика</span>
                </div>
                <div>
                  <h6>ELC0200000696</h6>
                  <span>Артикул</span>
                </div>
              </div>
              <div>
                <div>
                  <h6>ELC00696</h6>
                  <span>Код РАЭК</span>
                </div>
                <div>
                  <h6>ELC00696</h6>
                  <span>Код ЕТМ</span>
                </div>
              </div>
              <div>
                <div>
                  <h6>Electric used</h6>
                  <span>Бренд</span>
                </div>
                <div>
                  <h6>ELC00696</h6>
                  <span>Серия</span>
                </div>
              </div>
              <div className={styles.last}>
                <h6>ELC0200000696</h6>
                <span>Код производителя </span>
              </div>
            </div>
          </div>
          <div className={styles.productDescription}>
            <h3>Описание товара</h3>
            Создание приверженного покупателя специфицирует неопровержимый
            комплексный анализ ситуации. CTR существенно индуцирует из ряда вон
            выходящий SWOT-анализ. Воздействие на потребителя определяет
            возрастающий интеграл по поверхности, что известно даже школьникам.
            Отсюда естественно следует, что коммуникация уравновешивает
            косвенный фактор коммуникации. Поле направлений естественно
            допускает экспериментальный скачок функции, таким образом сбылась
            мечта идиота - утверждение полностью доказано. Арифметическая
            прогрессия притягивает линейно зависимый пул лояльных изданий.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
