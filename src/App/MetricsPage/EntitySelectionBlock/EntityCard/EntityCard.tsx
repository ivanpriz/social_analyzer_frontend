import React from "react"
import { useEffect, useState } from "react";
import classNames from "classnames";
import './styles.css';

export type CardProps = {
    /** URL изображения */
    image: string;
    /** Заголовок карточки */
    title: React.ReactNode;
    /** Подзаголовок карточки */
    subtitle: React.ReactNode;
    isSelected: Boolean;
    /** Содержимое карточки (футер/боковая часть), может быть пустым */
    content?: React.ReactNode;
    /** Клик на карточку */
    onClick?: React.MouseEventHandler;
};


export const EntityCard: React.FC<CardProps> = ({ image, title, subtitle, content, isSelected, onClick }) => {
    // доля размера экрана
    let [screenSizePerc, setScreenSizePerc] = useState<
      {screenWidthPerc: number|null, screenHeightPerc: number|null}
    >({screenWidthPerc: null, screenHeightPerc: null})
    let [isHovered, setIsHovered] = useState(false)
  
    // размер изображения (px)
    let [imageSize, setImageSize] = useState<
      {imageWidth: number, imageHeight: number}
    >({imageHeight: 100, imageWidth: 100})
    
    useEffect(
      () => {
        const handleResize = () => {
          setScreenSizePerc({
            screenWidthPerc: window.innerWidth/window.screen.width,
            screenHeightPerc: window.innerHeight/window.screen.height
          })
        }
  
        handleResize()
  
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
      }, []
    )
    const cardClass = classNames({
      card: true,
      card_hovered: isHovered,
      card_selected: isSelected,
    })
  
    return (
      <div
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={cardClass}
      >
        <img
          src={ image }
          style={ {
              width: 70 * Math.min(
                screenSizePerc.screenWidthPerc as number,
                screenSizePerc.screenHeightPerc as number,
                1
              ),
              height: 70 * Math.min(
                screenSizePerc.screenWidthPerc as number,
                screenSizePerc.screenHeightPerc as number,
                1
              ),
              top: 12,
              left: 12
          } }
          className="card-avatar"
        />
        <div className="card-content">
          <div className="entity-name">{ title }</div>
          <div className="entity-description">{ subtitle }</div>
        </div>
        <img src="/images/arrow-down.png" className="show-more" />
      </div>
    );
}