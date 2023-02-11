import { Container } from "react-bootstrap";
import { Icon } from "@iconify/react";

function Footer(){
    
    return(<Container className="footer" fluid>
        <span>
            Copyright <Icon icon="ic:baseline-copyright" color="white" />2023 Tejas Hatle  All Rights Reserved
        </span>
    </Container>
    );
}

export default Footer;