import { Component, OnInit } from '@angular/core';
import { AgentService } from '../agent.service';

@Component({
  selector: 'app-agent-status',
  templateUrl: './agent-status.component.html',
  styleUrls: ['./agent-status.component.css']
})
export class AgentStatusComponent implements OnInit {
  status: any = {};

  constructor(private agentService: AgentService) { }

  ngOnInit(): void {
    this.updateStatus();
  }

  updateStatus(): void {
    this.agentService.getStatus().subscribe(data => this.status = data);
  }

  performAction(action: string): void {
    this.agentService.performAction(action).subscribe(() => this.updateStatus());
  }
}
