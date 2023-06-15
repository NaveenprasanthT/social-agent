import React, { useState } from 'react';
import Card from './Card';
import Carousel from "./Carousel";

const Portfolio = () => {

    let cards = [
      {
        key: 1,
        content: (
          <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/convertplus_thumbnail.jpg" />
        )
      },
      {
        key: 2,
        content: (
          <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/acf_pro.png" />
        )
      },
      {
        key: 3,
        content: (
          <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/layer_slider_plugin_thumb.png" />
        )
      }
    ];
    return (
      <div className="">
        <Carousel
          cards={cards}
          height="350px"
          width="70%"
          margin="0 auto"
          offset={2}
          showArrows={false}
        />
      </div>
    );
};

export default Portfolio;