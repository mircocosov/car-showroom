import style from "./HomeMain.module.scss";
import { carModificationsData } from "@/api/data/car-modification";

interface Props {
  modificationId: string | null;
}

export default function HomeMain({ modificationId }: Props) {
  return (
    <div className={style.main__container}>
      <div className={style.main__container__prefix}>
        <span className={style.main__prefix}>ПРИОБРЕТИТЕ МАШИНУ МЕЧТЫ</span>
      </div>

      <div className={style.main__info_block_with_image}>
        <div>
          <img
            src={carModificationsData[Number(modificationId) ?? 0].image}
            alt="Car"
            className={style.main__image}
          />
        </div>
        <div className={style.main__info_block}>
          <p>
            Объем двигателя:{" "}
            {carModificationsData[Number(modificationId) ?? 0].engineVolume}
          </p>
          <p>
            Количество лошадинных сил:{" "}
            {carModificationsData[Number(modificationId) ?? 0].enginePower}
          </p>
          <p>
            Год выпуска:{" "}
            {carModificationsData[Number(modificationId) ?? 0].year}
          </p>
          <p>
            Разгон до 100 км/ч:{" "}
            {carModificationsData[Number(modificationId) ?? 0].acceleration}
          </p>
          <p>Цвет: {carModificationsData[Number(modificationId) ?? 0].color}</p>
        </div>
      </div>
    </div>
  );
}

// объем двигателя
// колво лошадинных сил
// цвет
// год выпуска
// разгон до 100
