
// export default function Todo({task}) {
//       return (
//             <li style={{
//                   fontSize: '30px'
//             }}>Task: {task}</li>
//       )
// }


// export default function Todo({ task, isDone }) {
//       console.log(task, isDone);
//       if (isDone === '{true}') {
//             return (
//                   <li style={{
//                         fontSize: '30px'
//                   }}>Finished: {task}</li>
//             )
//       }
//       else {
//             return (
//                   <li style={{
//                         fontSize: '30px'
//                   }}>Work On: {task}</li>
//             )
//       }
// }

// export default function Todo({ task, isDone }) {
//       console.log(task, isDone);
//       if (isDone) {
//             return (
//                   <li style={{
//                         fontSize: '30px'
//                   }}>Finished: {task}</li>
//             )
//       }
//       else {
//             return (
//                   <li style={{
//                         fontSize: '30px'
//                   }}>Work On: {task}</li>
//             )
//       }
// }

// export default function Todo({task,isDone}) {
//       return (
//             <li style={{
//                   fontSize: '30px'
//             }}> {isDone ? 'Finished' : 'Work On'}: {task}</li>
//       )
// }

// export default function Todo({task,isDone}) {
//       return (
//             <li style={{
//                   fontSize: '30px'
//             }}>{isDone && 'Finished'} : {task}</li>
//       )
// }

// export default function Todo({task,isDone}) {
//       return (
//             <li style={{
//                   fontSize: '30px'
//             }}>{isDone || 'Work on :'} {task}</li>
//       )
// }


export default function Todo({ task, isDone }) {
      let listItem;
      if (isDone === '{true}') {
            listItem = <li style={{
                  fontSize: '30px'
            }}>Finished: {task}</li>
      }

      else {
            listItem = <li style={{
                  fontSize: '30px'
            }}>Work On: {task}</li>
      }
      return listItem;
}