// TODO: update

// Temporary in-memory storage
// let resources: Resource[] = [];

// export const getResources = async (req: Request, res: Response) => {
//   try {
//     res.status(200).json(resources);
//   } catch (error: unknown) {
//     if (error instanceof Error) {
//       res.status(500).json({ message: error.message });
//     } else {
//       res.status(500).json({ message: 'Error fetching resources' });
//     }
//   }
// };

// export const createResource = async (req: Request, res: Response) => {
//   try {
//     const newResource = req.body;
//     resources.push(newResource);
//     res.status(201).json(newResource);
//   } catch (error: unknown) {
//     if (error instanceof Error) {
//       res.status(500).json({ message: error.message });
//     } else {
//       res.status(500).json({ message: 'Error creating resource' });
//     }
//   }
// };

// export const updateResource = async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;
//     const updatedResource = req.body;
//     resources = resources.map(res => res.id === id ? updatedResource : res);
//     res.status(200).json(updatedResource);
//   } catch (error: unknown) {
//     if (error instanceof Error) {
//       res.status(500).json({ message: error.message });
//     } else {
//       res.status(500).json({ message: 'Error updating resource' });
//     }
//   }
// };

// export const deleteResource = async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;
//     resources = resources.filter(res => res.id !== id);
//     res.status(204).send();
//   } catch (error: unknown) {
//     if (error instanceof Error) {
//       res.status(500).json({ message: error.message });
//     } else {
//       res.status(500).json({ message: 'Error deleting resource' });
//     }
//   }
// };
