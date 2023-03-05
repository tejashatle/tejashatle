import { Container } from "react-bootstrap";
import { Icon } from "@iconify/react";

function Footer(){
    
    return(<Container className="footer" fluid style={{ flexDirection: "column", textAlign: "center"}}>
        <div>
            Copyright <Icon icon="ic:baseline-copyright" color="white" />2023 Tejas Hatle 
        </div>
        <div>
            All Rights Reserved
        </div>
    </Container>
    );
}

export default Footer;