// export default function Recap({ course, isDone }) {
//       if (isDone) {
//             return (
//                   <h3>Congrats! You Complete {course}.</h3>
//             )
//       }
//       else {
//             return (
//                   <h3>Sorry! You Cann't finished {course}.</h3>
//             )
//       }
// }

// export default function Recap({ course, isDone }) {
//       return (
//             <h3>
//                   { isDone ? "Finished :" : "Work On :" } {course}
//             </h3>
//       )
// }

// export default function Recap({ course, isDone }) {
//       return (
//             <h3>
//                   {isDone && "Finished :"} {course}
//             </h3>
//       )
// }

export default function Recap({ course, isDone }) {
      return (
            <h3>
                  { isDone || "Work On :" } {course}
            </h3>
      )
}