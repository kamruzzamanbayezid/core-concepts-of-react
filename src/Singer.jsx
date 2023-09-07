// export default function Singer(singer) {
//       console.log(singer.identity.name);
//       const {name,age} = singer.identity;
//       // const { name, age } = identity;
//       // console.log(name, age);
//       return (
//             <div>
//                   <h3>Singer Name: {name}</h3>
//                   <p>His Age: {age}</p>
//             </div>
//       )
// }


export default function Singer({singer}) {
     console.log(singer);
      const {name,age} = singer;
      return (
            <div>
                  <h3>Singer Name: {name}</h3>
                  <p>His Age: {age}</p>
            </div>
      )
}