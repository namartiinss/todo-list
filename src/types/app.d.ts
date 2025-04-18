export interface InputProps {
    newToDo: string;
    setNewToDo: React.Dispatch<React.SetStateAction<string>>
    onSubmit: () => void
  } 

export interface CountTask {
  likeCount: number;
} 