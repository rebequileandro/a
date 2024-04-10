import React from "react";
import "./Footer.scss";

import ElipseFooter from "../../assets/FooterAssets/Elipses Footer Fiestero.png";

const Footer = () => {
  return (
    <div className="footer-container" id="download">
      <section className="footer-info">
        <h1 className="footer-h1">
          ES HORA DE ACTUALIZARSE AL SIGLO 21 <br /> ES HORA DE WEDRINK
        </h1>
        <p className="footer-p">
          Bajá la app y viví una nueva experiencia. <br /> Creá tu cuenta en
          segundos.
        </p>
        <div className="wedrink-store">
        <a href="https://wedrinkapp.com/" target="_blank" className="btn btn--primary">Pruébalo: Es gratuito</a>
        </div>
      </section>
      <div className="shapes">
        <img src={ElipseFooter} alt="" className="egg1" loading="lazy" />
        <div style="shape-outside: polygon(148px 572px, 140px 562px, 129px 549px, 120px 535px, 112px 523px, 102px 509px, 94px 496px, 88px 480px, 78px 464px, 73px 447px, 67px 429px, 64px 415px, 60px 399px, 62px 380px, 70px 358px, 79px 345px, 94px 333px, 107px 324px, 120px 319px, 139px 314px, 158px 311px, 176px 308px, 192px 309px, 215px 310px, 241px 313px, 261px 317px, 286px 320px, 307px 323px, 323px 328px, 342px 335px, 357px 341px, 375px 348px, 398px 357px, 411px 362px, 431px 371px, 453px 389px, 474px 406px, 485px 420px, 495px 429px, 504px 440px, 518px 453px, 530px 471px, 543px 488px, 549px 501px, 559px 518px, 567px 539px, 570px 566px, 570px 585px, 556px 614px, 541px 634px, 527px 643px, 511px 652px, 483px 665px, 459px 671px, 436px 675px, 415px 677px, 395px 679px, 373px 679px, 354px 678px, 330px 676px, 310px 674px, 291px 670px, 269px 664px, 247px 657px, 231px 649px, 212px 637px, 202px 626px, 192px px 617px, 180px 605px, 169px 594px, 159px 584px)"/>
      </div>
    </div>
  );
};

export default Footer;
