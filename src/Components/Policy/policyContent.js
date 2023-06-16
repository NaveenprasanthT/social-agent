import styles from '@/styles/Policy/termsConditions.module.css';

const PolicyContent = ({policyDesc}) => {
    return(
        <div className={styles.DescriptionContainer}>
        {policyDesc.map((policy) => (
                <div className={styles.Description}>
                    <h3>{policy.title}</h3>
                    <p>{policy.content}</p>
                </div>
            ))}
        </div>
    );
}

export default PolicyContent;