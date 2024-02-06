import React from 'react';
import overviewStyles from "./overvievw.module.css";

export default function Overview ({ myRole, responsibilities, timeline, status, team, overviewText }) {
    return (
        <div className={overviewStyles.outterContainer}>
            {/* row 1 */}
            <div className={overviewStyles.row1}>
            
                    <h1 className={overviewStyles.heading}>My Role</h1>
                    <p className={overviewStyles.body}>
                        {myRole}
                        {responsibilities}
                    </p>
        
                    <h1 className={overviewStyles.heading}>Timeline & Status</h1>
                    <p className={overviewStyles.body}>
                        {timeline}
                        <br/>
                        <span className={overviewStyles.emphasis}>
                        {status}
                    </span>
                    </p>
                    
        
                    <h1 className={overviewStyles.heading}>Team</h1>
                    <p className={overviewStyles.body}>
                        {team}
                    </p>
              
            </div>
            
            {/* row 2 */}
            <div className={overviewStyles.row2}>
                <h1 className={overviewStyles.heading}>Overview</h1>
                <p className={overviewStyles.body}>
                    {overviewText}
                </p>
            </div>

        </div>
    );
}