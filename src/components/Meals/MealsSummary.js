import classes from './MealsSummary.module.css';

const MealsSummary = () => {
    return (
        <section className={classes.summary}>
            <h2> Leziz Yemekler, Kapınıza Gelsin</h2>
            <p>
                En sevdiğin yemeği geniş menü yelpazesinden seç, günün her saati muhteşem lezzetleri evinde ye. 
            </p>
            <p>
                Tüm yemeklerimiz usta şefler tarafından yüksek kaliteli malzemelerden pişirilir, tam zamanında gelir.
            </p>
        </section>
    );
};

export default MealsSummary;