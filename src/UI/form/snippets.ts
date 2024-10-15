// validations: [
//     {
//       type: "when",
//       params: [
//         `${item.name}_checkbox`,
//         {
//           is: true, // alternatively: (val) => val == true
//           then: (schema: StringSchema) =>
//             schema.min(5, requiredCheck),
//           otherwise: (schema: StringSchema) =>
//             schema.min(10, "dfgdfgdfg"),
//         },
//       ],
//     },
//   ],
