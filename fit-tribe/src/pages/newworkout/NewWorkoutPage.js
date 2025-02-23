import React from 'react';

function NewWorkoutPage() {
  return (
    <div>
      <h1>Enter New Workout</h1>
      <form>
        <label>
          Workout Name:
          <input type="text" name="workoutName" />
        </label>
        <br />
        <button type="submit">Save Workout</button>
      </form>
    </div>
  );
}

export default NewWorkoutPage;