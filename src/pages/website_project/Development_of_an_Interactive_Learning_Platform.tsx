import TableOfContent from "../../components/TableOfContent";
import Article from "../../components/Article";
import { GetProject } from "../../utils/get-project";
import {
  HomePage,
  ModulePage,
  ContentPage,
  QuizPage,
} from "../../constants/images";
import { CreateContent } from "../../hooks/create-content";
import { Content } from "../../types";

export function Component(): JSX.Element {
  const contents: Content[] = [
    CreateContent({
      headerText: "Project overview",
      paragraphText:
        "The goal of this project is to increase students' learning experience. To measure the usefulness and ease of use of the learning platform, we conducted an experiment in a class at one of the universities in Taiwan.",
      images: [HomePage, ModulePage, ContentPage, QuizPage],
    }),
    CreateContent({
      headerText: "Framework & Language",
      tags: ["TypeScript", "React.js"],
    }),
    CreateContent({
      headerText: "Results",
      paragraphText:
        "We got positive feedback from the students after they finished using the learning platform. The survey proved that 70% of students agree that the learning platform is useful and easy to use.",
    }),
  ];

  const project = GetProject("Development_of_an_Interactive_Learning_Platform", "Website");
  return (
    <>
      <TableOfContent contents={contents} />
      {project && (
        <Article title={project.title} contents={contents} />
      )}
    </>
  );
}
