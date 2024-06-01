import {useState} from 'react';
import NewProject from './components/NewProject.jsx';
import NoProjectSelected from './components/NoProjectSelected.jsx';
import SelectedProject from './components/SelectedProject.jsx';
import Sidebar from './components/Sidebar.jsx';

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });

  function handleStartAddProject() {
    setProjectsState(prev => {
      return {...prev, selectedProjectId: null};
    });
  }

  function handleCancelAddProject() {
    setProjectsState(prev => {
      return {...prev, selectedProjectId: undefined};
    });
  }

  function handleAddProject(newProject) {
    const addedProject = {...newProject, id: Math.random()};
    setProjectsState(prev => {
      return {...prev, selectedProjectId: undefined, projects: [...prev.projects, {...addedProject}]};
    })
  }

  function handleSelectProject(id) {
    setProjectsState(prev => {
      return {...prev, selectedProjectId: id};
    });
  }

  function handleDeleteProject() {
    setProjectsState(prev => {
      const updated = prev.projects.filter(elem => elem.id !== prev.selectedProjectId);
      return {...prev, selectedProjectId: undefined, projects: [...updated]};
    });
  }

  function handleAddTask(title) {
    setProjectsState(prev => {
      const addedTask = {
        id: Math.random(),
        title,
        projectId: prev.selectedProjectId
      };
      return {...prev, tasks: [...prev.tasks, {...addedTask}]};
    });
  }

  function handleDeleteTask(taskId) {
    setProjectsState(prev => {
      const updated = prev.tasks.filter(elem => elem.id !== taskId);
      return {...prev, tasks: [...updated]};
    });
  }

  const selectedProject = projectsState.projects.find(elem => elem.id === projectsState.selectedProjectId);
  let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject} tasks={projectsState.tasks} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask}/>;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onAdd={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar projects={projectsState.projects} onAdd={handleStartAddProject} onSelect={handleSelectProject} selectedId={projectsState.selectedProjectId}/>
      {content}
    </main>
  );
}

export default App;
