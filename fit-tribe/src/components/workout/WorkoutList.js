import { Link } from "react-router-dom"
import { getAllWorkouts } from '../../data/workouts/WorkoutData';

const WorkoutsList = () => {
    const workouts = getAllWorkouts()
    return (
        <>
            <div className="list-workout">
                {workouts.map(workout => (
                    <Link to={`/${workout.id}`}>
                        <div className="list-workout-header">
                            <h2>{workout.name}</h2>
                            <h3>{workout.date}</h3>
                        </div>
                    </Link>
                ))}
            </div>
            
        </>
        
    )
}

export default WorkoutsList