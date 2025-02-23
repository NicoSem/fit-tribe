
// Import your mock data
import workouts from './Workouts'; // adjust the path accordingly

// Retrieve all workouts
export const getAllWorkouts = () => {
  return workouts;
};

// Retrieve a specific workout by name
export const getWorkoutByName = (name) => {
  return workouts.find(
    (workout) => workout.name.toLowerCase() === name.toLowerCase()
  );
};

// You can even simulate asynchronous behavior if needed:
export const getAllWorkoutsAsync = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(workouts), 500);
  });
