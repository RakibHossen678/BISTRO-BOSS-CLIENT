import Cover from "../../Shared/Cover";
import img1 from '../../../assets/menu/banner3.jpg'
import PopularMenu from "../../Home/PopularMenu/PopularMenu";
const Menu = () => {
  return (
    <div>
        <Cover header={'OUR MENU'} subHeader={'Would you like to try a dish?'} bgImg={img1}></Cover>
        <PopularMenu></PopularMenu>
        <Cover header={'OUR MENU'} subHeader={'Would you like to try a dish?'} bgImg={img1}></Cover>
        <PopularMenu></PopularMenu>
        <Cover header={'OUR MENU'} subHeader={'Would you like to try a dish?'} bgImg={img1}></Cover>
        <PopularMenu></PopularMenu>
        <Cover header={'OUR MENU'} subHeader={'Would you like to try a dish?'} bgImg={img1}></Cover>
        <PopularMenu></PopularMenu>
        <Cover header={'OUR MENU'} subHeader={'Would you like to try a dish?'} bgImg={img1}></Cover>
        <PopularMenu></PopularMenu>
    </div>
  );
};

export default Menu;
