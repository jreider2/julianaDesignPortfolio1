import React from 'react';
import styles from "./overvievw.module.css";

export default function Overview ({ myRole, responsibilities, timeline, status, team, overviewText }) {
    return (
        <div className={styles.outterContainer}>
            {/* row 1 */}
            <div className={styles.row1}>
                <div>
                    <div className={styles.heading}>My Role</div>
                    <p className={styles.body}>
                        {myRole}
                        {responsibilities}
                    </p>
                </div>

                <div>
                    <h1 className={styles.heading}>Timeline & Status</h1>
                    <p className={styles.body}>
                        {timeline}
                    </p>
                    <p className={styles.emphais}>
                        {status}
                    </p>
                </div>
                <div>
                    <h1 className={styles.heading}>Team</h1>
                    <p className={styles.body}>
                        {team}
                    </p>
                </div>
            </div>
            {/* row 2 */}
            <div className={styles.row2}>
                <h1 className={styles.heading}>Overview</h1>
                {overviewText}
            </div>

        </div>
    );
}