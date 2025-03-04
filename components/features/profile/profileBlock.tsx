import { BsPen } from "react-icons/bs";
import BulletedList from "@/components/ui/bulletedList/bulletedList";
import Heading from "@/components/ui/heading/heading";
import style from "./profile_block.module.css";
import { motion } from "framer-motion"

type Props = {};

const Profile: React.FC<Props> = () => {
  return (
    <div>
      <motion.div
      className={style.section + " " + style.name}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    
      >
        <Heading level={1}>Kazuya Umeki</Heading>
        <Heading>@umekikazuya</Heading>
      </motion.div>
      <div className={style.section}>
        <div className={style.item}>
          <BsPen />
          <div className={style.item_text}>Web Creator</div>
        </div>
        <div className={style.item + " " + style.mt8}>
          <BsPen />
          <div className={style.item_text}>From Fukuoka / Address Tokyo</div>
        </div>
        <div className={style.section}>
          <Heading>LIKES</Heading>
          <BulletedList>
            <li>Mr.Children</li>
            <li>Mr.Children</li>
            <li>Mr.Children</li>
          </BulletedList>
        </div>
      </div>
    </div>
  );
};

export default Profile;
