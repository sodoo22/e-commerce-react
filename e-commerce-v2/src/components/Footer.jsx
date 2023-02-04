import FooterList from "./FooterList";
import { FindData } from "../data/footer";
import { GetData } from "../data/footer";
import { AboutData } from "../data/footer";

export default function Footer() {
  return (
    <footer className="footerConDiv">
      <div className="footSubs d-flex justify-content-around align-items-center py-5">
        <div>
          <h1>Subscribe newsletter</h1>
        </div>
        <div className="footerInputDiv">
          <input type="email" placeholder="Email address" />
          <a className="sendBtn">
            {" "}
            <i class="bi-send"></i>
          </a>
        </div>

        <div className="d-flex align-items-center ">
          <div>
            <i class="bi bi-headset"></i>
          </div>
          <div>
            <p>Call us 24/7</p>
            <p>976-7777-8888</p>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between py-5">
        <div className="col-2">
          <img src="../images/logo2.png" alt="" />
          <p className="py-4">
            64 st james boulevard <br />
            hoswick , ze2 7zj
          </p>
          <hr />
          <div className="d-flex  gap-4">
            <i class="bi bi-google"></i>
            <i class="bi bi-facebook"></i>
            <i class="bi bi-whatsapp"></i>
          </div>
        </div>
        <FooterList data={FindData} title={"Find product"} />
        <FooterList data={GetData} title={"Get help"} />
        <FooterList data={AboutData} title={"About us"} />
      </div>
    </footer>
  );
}
