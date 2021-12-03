import React from "react";
import { Section } from "../../components/starbucks/";

const sectionData = [
  {
    main_title: "Jingle all the way to free favorites",
    description:
      "Join Starbucks® Rewards for delicious deals & exclusive offers. Learn more",
  },
  {
    main_title: "STARBUCKS FOR LIFE",
    description:
      "Grab your favorite festive drink and play for the chance to win free coffee and so much more.*",
    button_title: "Play Now",
    bg_color: "#d4e9e2",
    text_color: "#1e3932",
    img_src:
      "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-75548.png",
  },
  {
    main_title: "BRULÉE BLISS",
    description:
      "One sip of our creamy and cozy Caramel Brulée Latte will put you in a festive state of mind.",
    button_title: "Order now",
    bg_color: "#d50032",
    img_src:
      "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-75549.png",
  },
  {
    main_title: "CHILL AND BE MERRY",
    description:
      "Our Irish Cream Cold Brew is dressed up for the holidays with sweet cream cold foam and a strike of cocoa.",
    button_title: "Order now",
    bg_color: "#d50032",
    img_src:
      "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-75419.jpg",
  },
  {
    main_title: "You vote, we give",
    description:
      "This holiday season, The Starbucks Foundation is donating $1 million to strengthen communities—and you have a say in where it goes. Vote between Dec. 1-15.",
    button_title: "Cast your vote",
    bg_color: "#d50032",
    custom_title_styling: {
      fontSize: "22px",
      textTransform: "capitalize",
    },
    custom_desc_styling: {
      fontSize: "16px",
    },
    img_src:
      "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-75550.jpg",
  },
  {
    main_title: "Earning 4,500 Bonus Stars is Super Starifying",
    description:
      "Earn more Stars and even more Rewards with a $0 intro annual fee for your first year with the Starbucks® Rewards Visa® Card. Plus your Stars won’t expire – an exclusive Starbucks benefit for cardmembers. Now that’s Super Starifying.",
    button_title: "Cast your vote",
    bg_color: "#d4e9e2",
    text_color: "#1e3932",
    custom_title_styling: {
      fontSize: "22px",
      textTransform: "capitalize",
    },
    custom_desc_styling: {
      fontSize: "16px",
    },
    img_src:
      "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-75418.jpg",
  },
];

function HomeStarbucks() {
  return (
    <div>
      {sectionData.map((section, index) => (
        <Section
          key={index}
          main_title={section.main_title}
          description={section.description}
          button_title={section?.button_title}
          bg_color={section?.bg_color}
          text_color={section?.text_color}
          img_src={section?.img_src}
          custom_title_styling={section?.custom_title_styling}
          custom_desc_styling={section?.custom_desc_styling}
        />
      ))}

      <div className="text-xs leading-6 font-semibold text-center p-8">
        *NO PURCHASE NECESSARY. Participating stores only. Starbucks employees
        are not eligible to win prizes. Ends 1/3/22. To play and for Official
        Rules, visit starbucksforlife.com. Entrants can receive a maximum of 2
        plays per day, plus bonus opportunities to earn additional plays.
      </div>
    </div>
  );
}

export default HomeStarbucks;
