import Ellipses from './ServicesCart';
export default function Services() {
    function MenuItem({ imgSrc, title, description, className } :MenuItemProps) {
        return (
          <div className={`menu-item ${className}`}>
            <img src={imgSrc} alt={title} />
            <h6>{title}</h6>
            <p>{description}</p>
          </div>
        );
    }     

    type MenuItemProps = {
        imgSrc: string;
        title: string;
        description: string;
        className: string;
      };

    return (
      <div>
        <section className="Services-menu">
          <MenuItem
            imgSrc="../images/streamline-emojis-hospital.svg"
            title="Search Doctors"
            description="Effortlessly Find the Best Doctors Near You"
            className="menu-item1"
          />
          <MenuItem
            imgSrc="../images/fontisto-doctor.svg"
            title="Search Hospitals"
            description="Effortlessly Find the Best Hospitals Near You"
            className="menu-item2"
          />
          <MenuItem
            imgSrc="../images/mingcute-save-line.svg"
            title="Export Hospitals"
            description="Save list of hospitals"
            className="menu-item3"
          />
          <MenuItem
            imgSrc="../images/ph-share-bold.svg"
            title="Share Hospitals"
            description="Share the list of hospitals with others"
            className="menu-item4"
          />
        </section>
        <Ellipses/>
      </div>
    );
  }