import { useState } from 'react';
import styled from 'styled-components';
import styles,{css} from '@/styles/FAQ.module.css'
import { AiOutlineDown } from 'react-icons/ai'
import Button from './Button';
import Link from 'next/link';


const AccordionContainer = styled.div`
  margin-bottom: 10px;
  border-bottom: 1px solid #000;

`;

const AccordionItem = styled.div`
  color: var(--secondary-color);
  transition: 0.4s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 550;
  font-size: 22px;
  padding: 10px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
        font-size: 20px !important;
}
@media screen and (max-width: 500px) {
    font-size: 18px !important;
}
`;

const AccordionContent = styled.div`
  transition: 0.4s;
  line-height:  ${({ isOpen }) => (isOpen ? '30px' : '0px')};
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  color: #00000079;
  font-weight: 400;
  font-size: 20px;
  padding: 10px;
  padding-bottom : ${({ isOpen }) => (isOpen ? '10px' : '0')};
  @media screen and (max-width: 768px) {
    font-size: 18px !important;
}
@media screen and (max-width: 500px) {
    font-size: 16px !important;
}
  `;

const Faq = ({items}) => {
    const [activeIndices, setActiveIndices] = useState([]);

    const handleItemClick = (index) => {
        if (activeIndices.includes(index)) {
            setActiveIndices(activeIndices.filter((i) => i !== index)); // Close the clicked item if it's already open
        } else {
            setActiveIndices([...activeIndices, index]);
        }
    }

    return (

        <div className={styles.FaqFormWrap}>
            <div className={styles.header}>
                <h1>Curious? <span style={{ color: 'var(--P500)' }} >We've Got the Answers!</span></h1>
            </div>
            <div className={styles.body}>
                <div>
                    {items.map((item, index) => (
                        <AccordionContainer key={index}  >
                            <div >
                                <AccordionItem index={index} onClick={() => handleItemClick(index)}>
                                    {item.title} <AiOutlineDown style={activeIndices.includes(index) ? { transform: 'rotate(180deg)', transition: '0.4s' } : { transform: 'rotate(0deg)', transition: '0.4s' }} />
                                </AccordionItem>
                                <AccordionContent isOpen={activeIndices.includes(index)}>
                                    {item.content}
                                </AccordionContent>
                            </div>
                        </AccordionContainer>
                    ))}

                </div>
            </div>
            <div className="btnWrap">
                <Link href="/Services">
                    <Button value='Discover' bg='var(--P700)' color='#fff' />
                </Link>
            </div>
        </div>
    )
}

export default Faq;