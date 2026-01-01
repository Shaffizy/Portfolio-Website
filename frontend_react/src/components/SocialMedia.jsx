import React from "react";
import { BsTwitter, BsLinkedin, BsWhatsapp } from "react-icons/bs";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a
        href="https://x.com/shaffi1_0?s=21"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsTwitter />
      </a>
    </div>

    <div>
      <a
        href="https://www.linkedin.com/in/shaffi-ibrahim-ikoko-665513336/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin />
      </a>
    </div>

    <div>
      <a
        href="https://wa.me/2349049055463"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsWhatsapp />
      </a>
    </div>
  </div>
);

export default SocialMedia;
