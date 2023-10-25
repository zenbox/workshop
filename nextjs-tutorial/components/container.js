import styles from "./container.module.scss";

function Container({ children }) {
    return (
        <>
            <h1>Überschrift aus der Komponente</h1>
            <div className={styles.container}>{children}</div>
        </>
    );
}

export default Container;
