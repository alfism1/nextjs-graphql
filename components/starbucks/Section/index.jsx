import React from "react";
import PropTypes from "prop-types";

function Section({
  main_title,
  description,
  button_title,
  img_src,
  bg_color,
  text_color,
  custom_title_styling,
  custom_desc_styling,
  reverse,
}) {
  return (
    <main
      className="text-center mb-9"
      style={{ backgroundColor: bg_color, color: text_color }}
    >
      <div className={`md:flex md:items-center md:justify-center ${reverse && "md:flex-row-reverse"}`}>
        {img_src && <img className="md:w-1/2" src={img_src} alt={main_title} />}
        <div className="px-4 md:px-16 py-10">
          <h2
            className="uppercase font-semibold text-2xl lg:text-5xl"
            style={custom_title_styling}
          >
            {main_title}
          </h2>

          <div className="mt-4 text-xl" style={custom_desc_styling}>
            {description}
          </div>

          {button_title && (
            <button
              className="rounded-3xl text-sm font-bold px-3 py-1.5 mt-6"
              style={{
                color: text_color,
                border: "1px solid",
                borderColor: text_color,
              }}
            >
              {button_title}
            </button>
          )}
        </div>
      </div>
    </main>
  );
}

Section.propTypes = {
  img_src: PropTypes.string,
  main_title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  button_title: PropTypes.string,
  custom_title_styling: PropTypes.object,
  custom_desc_styling: PropTypes.object,
  reverse: PropTypes.bool,
};

Section.defaultProps = {
  bg_color: "#006241",
  text_color: "white",
  custom_title_styling: {},
  custom_desc_styling: {},
  reverse: false,
};

export default Section;
