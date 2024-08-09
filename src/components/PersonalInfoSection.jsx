import React from "react";

export default function PersonalInfoSection({ data, style }) {
    return (
        <div className={`personalInfo ${style}`}>
            <h1 className={`nameSection ${style}`}>{data.name}</h1>
            <div className={`personalInfoData ${style}`}>
                <div className={`emailSection ${style}`}>
                    <span>{data.mail}</span>
                </div>
                <div className={`phoneNumber ${style}`}>
                    <span>{data.phone}</span>
                </div>
                <div>
                    <span>{data.address}</span>
                </div>
            </div>
        </div>
    );
}
