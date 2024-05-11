import style from "./Header.module.scss";
import { Link } from "react-router-dom";
import {useTheme} from "@/hooks/useTheme.tsx"

export default function Header() {

  const {theme, setTheme } = useTheme();

  const handleLightThemeClick = () => {
    setTheme('light');
  }

  const handleDarkThemeClick = () => {
    setTheme('dark');
  }

  return (
    <div className={style.header__container}>
      <Link to={""} className={style.container__button}>
        ДОМОЙ
      </Link>

      <Link to={""} className={style.container__button}>
        <svg
          enable-background="new 0 0 512 512"
          height="50px"
          id="Layer_12"
          version="1.1"
          viewBox="0 0 512 512"
          width="50px"
        >
          <path
            clip-rule="evenodd"
            d="M430.121,76.219l-4.281,20.559  c-0.195,8.434-7.047,15.223-15.516,15.223c-8.594,0-15.578-6.961-15.578-15.555c0-1.512,0.273-2.965,0.68-4.344l4.5-21.488  C404.332,49.512,393.684,32,376.012,32H96c-17.664,0-32,17.512-32,38.613V304v21.586v126.969C64,467.727,76.273,480,91.445,480  c7.695,0,14.539-3.281,19.523-8.398l82.289-99.18C204.953,359.891,221.516,352,240.004,352h75.094  c14.312,0,28.352-11.695,31.438-26.414l17.531-83.742c0.062-0.621,0.195-1.223,0.195-1.844c0-8.844-7.18-16-16-16H208  c-8.844,0-16-7.156-16-16s7.156-16,16-16h139.004c26.508,0,48,21.488,48,48c0,3.082-0.297,6.129-0.875,9.039l-16.992,81.547  C370.895,360.516,342.871,384,314.301,384h-72.805c-9.426,0-17.848,4.148-23.699,10.648l-80.547,96.656  C126.234,503.953,110.062,512,92.008,512C58.859,512,32,485.141,32,451.992V330.586V320V76.219C32,34.852,60.648,0,96,0h286.004  C417.34,0,438.73,34.852,430.121,76.219L430.121,76.219z M384.004,151.988c0-8.824,7.156-15.996,16-15.996s16,7.172,16,15.996  c0,8.848-7.156,16.004-16,16.004S384.004,160.836,384.004,151.988L384.004,151.988z"
            fill="#FFF"
            fill-rule="evenodd"
          />
        </svg>
      </Link>

      <Link to={`contacts/AbWoutUs`} className={style.container__button}>
        О КОМПАНИИ
      </Link>

      {/* <div>
        <button onClick={handleLightThemeClick}>
          Light
        </button>
        <button onClick={handleDarkThemeClick}>
          Dark
        </button>
      </div> */}
    </div>
  );
}
