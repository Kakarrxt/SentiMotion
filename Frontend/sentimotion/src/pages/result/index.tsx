import { useEffect, useState } from "react";
import { Record } from "@/utils/types";
import Happy from "./happy";




function fetchData(url: RequestInfo | URL) {
    return fetch(url).then(response => response.json());
}
interface ReportProps {
    open: boolean;
}

export default function Records(props: ReportProps) {
    const { open } = props;
    const [report, setReport] = useState<Record[]>([]);

    useEffect(() => {
        async function fetchDataAndSetReport() {
            try {
                const response = await fetch('http://localhost:5000/records');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setReport(data);
            } catch (error) {
                console.error('Error fetching data:', error);
                setReport([]);
            }
        }

        fetchDataAndSetReport();
    }, [open]);

    const reportLength = report.length;
    const numberOfDataPointsToInclude = Math.min(reportLength, 500);
    const filteredReport = report.slice(reportLength - numberOfDataPointsToInclude, reportLength);

    
    const filteredData = filteredReport.map((item) => ({
        label: item.label,
        timestamp: new Date(item.timestamp).toLocaleTimeString('en-US', {
          hour12: false, 
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }),
      }));
    
    
      console.log(filteredData);
    const labelCounts: { [key: string]: number } = {};

    filteredReport.forEach((item) => {
        const label = item.label;
        if (label !== 'neutral') { // Skip 'neutral' label
            if (labelCounts[label]) {
                labelCounts[label] += 1;
            } else {
                labelCounts[label] = 1;
            }
        }
    });

    // Find the label with the highest count
    let maxCount = 0;
    let labelWithMaxCount = '';

    for (const label in labelCounts) {
        if (labelCounts[label] > maxCount) {
            maxCount = labelCounts[label];
            labelWithMaxCount = label;
        }
    }
    console.log(labelCounts);

    function getEmojiForLabel(label: string) {
        switch (label) {
            case 'happy':
                return <Happy labelCounts={labelCounts} filteredData={filteredData} emotion={"Happy"}/>;
            case 'sad':
                return <Happy labelCounts={labelCounts} filteredData={filteredData} emotion={"Sad"}/>;
            case 'angry':
                return <Happy labelCounts={labelCounts} filteredData={filteredData} emotion={"Angry"}/>;
            case 'surprise':
                return <Happy labelCounts={labelCounts} filteredData={filteredData} emotion={"Surprise"}/>;
            case 'fear':
                return <Happy labelCounts={labelCounts} filteredData={filteredData} emotion={"Fear"}/>;
            case 'disgust':
                return <Happy labelCounts={labelCounts} filteredData={filteredData} emotion={"Disgust"}/>;
            default:
                return <Happy labelCounts={labelCounts} filteredData={filteredData} emotion={"Neutral"}/>;
        }
    }

    return (      
        <div>{getEmojiForLabel(labelWithMaxCount)}</div>
            
    )
}