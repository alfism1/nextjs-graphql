import React, { useEffect, useState } from "react";
import Script from "next/script";
import styles from "./AddThis.module.scss"

function AddThis({ slug, title }) {
  // const [s, setS] = useState("");

  useEffect(() => {
    window?.addthis?.update("share", "url", `blog/post/${slug}`);
    window?.addthis?.update("share", "title", title);
    window?.addthis?.layers?.refresh();
    window?.addthis?.toolbox('.addthis_toolbox'); // https://stackoverflow.com/questions/21718894/addthis-not-working-after-ajax-load
  }, [slug]);

  const handleAddthis = () => {
    window?.addthis?.init();
  };

  return (
    <React.Fragment>
      <div data-addthis-url={`blog/post/${slug}`} data-addthis-title={title}>
        <div className={`addthis_toolbox addthis_default_style addthis_32x32_style ${styles.addthis_custom_style}`}>
          <a className="addthis_button_whatsapp"></a>
          <a className="addthis_button_facebook"></a>
          <a className="addthis_button_twitter"></a>
          <a className="addthis_button_linkedin"></a>
          <a className="addthis_button_compact"></a>
        </div>
      </div>
      <Script
        type="text/javascript"
        src="https://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-617df1b6c0b1a19d"
        onLoad={handleAddthis}
      ></Script>
    </React.Fragment>
  );
}

export default AddThis;
