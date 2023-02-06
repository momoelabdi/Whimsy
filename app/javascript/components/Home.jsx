import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>
        Home Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at
        metus nec metus posuere rhoncus sed vel ante. Nunc sed tincidunt diam.
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Mauris commodo felis felis, et faucibus ligula
        finibus et. Etiam vitae libero a ligula fringilla congue ac ac dui. In
        hac habitasse platea dictumst. Maecenas euismod et quam ut aliquam.
        Praesent tempus lectus eget dolor bibendum pharetra. Donec gravida quam
        odio, ac blandit lorem mollis vitae. Pellentesque nisl elit, tincidunt
        eget commodo lacinia, mattis in sapien. Curabitur efficitur nibh quis
        mauris ullamcorper mattis. Fusce porta, nibh non tristique mollis, orci
        metus facilisis enim, a malesuada sem magna sed nunc. Nam volutpat
        ultrices risus. Fusce accumsan aliquam velit, et ultricies risus
        convallis ultrices. Vivamus ullamcorper mi sit amet magna tristique
        auctor. Mauris nunc augue, euismod sit amet tincidunt sed, efficitur id
        turpis. Cras a purus sed risus sollicitudin sollicitudin vitae in ipsum.
        Nunc fringilla arcu sit amet gravida accumsan. Nulla facilisi. Vivamus
        imperdiet facilisis tristique. Ut erat enim, rutrum sed erat quis,
        rhoncus egestas justo. Fusce ullamcorper erat nec venenatis varius. Duis
        venenatis dignissim dolor id malesuada.
      </h1>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Home;
