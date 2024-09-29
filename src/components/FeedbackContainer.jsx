import ProgressBar from "./ProgressBar"

export const FeedbackContainer = ({feedBack}) => {
    return <div id="feedback-container">
        <h2>{feedBack.areaName}</h2>
        <ProgressBar value={feedBack.safetyPercentage} />
        <p id="reasoning">{feedBack.reasoning}</p>
    </div>
}