import Card from './Card';

const CardSection= ()=>{

    return(
        <section className="contact bg-success ">
        <div className="container ">
          <h2 className="text-white">
            We love new friends!
          </h2>
          <div className="row">
              <Card
              cardTitleop="Github"
              cardDescriptionop="This is my First repo"
              btnText="See Repo"
              
              />
              <Card
               cardTitleop="Instagram"
               cardDescriptionop="Follow us on Insta"
               btnText="Follow"
              
              />
              <Card
               cardTitleop="Youtube"
               cardDescriptionop="Subscribe our youtube Channel"
               btnText="SUBSCRIBE"
              
              />
          </div>
        </div>
      </section>
    )
}

export default CardSection;