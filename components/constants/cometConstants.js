import overviewStyles from "../useCaseGenerics/overview.module.css";

const overviewTextP1= "When programming, the last thing software engineers want to worry about is how to avoid mistakes when committing and versioning code.";
const overviewTextP2= <>
    <span className={overviewStyles.emphasis}> That’s where Comet comes in.</span>
</>;
const overviewTextP3= <> Comet is a source code management tool designed to replace the traditional git command line interface (CLI), addressing typical challenges developers face when versioning. Comet makes versioning
    <span className={overviewStyles.emphasis}> faster, easier to learn, and less prone to errors</span>.
</>

export const text = <>{overviewTextP1} <br/><br/> {overviewTextP2} <br/><br/> {overviewTextP3}</>;