import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../../../models/project';
import { ProjectService } from '../../../services/project.service';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css'],
  imports: [CommonModule]
})
export class ProjetosComponent implements OnInit {

  project!: Project;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const projectId = params['projectId'];  // Get the project ID from route parameters
      this.loadProject(projectId);
    });
  }

  loadProject(id: string): void {
    this.projectService.getProjectById(id).subscribe(
      (projectData: Project | undefined) => {
        if (projectData) {
          this.project = projectData;  // Update the project data only if it's not undefined
        } else {
          console.error('Project not found:', id);
          // Handle the case when the project is not found
          // e.g., redirect to an error page or display a not-found message
        }
      },
      error => {
        console.error('Error fetching project data:', error);
      }
    );
  }
  

}
