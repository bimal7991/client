import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-server-error',
  templateUrl: './server-error.component.html',
  styleUrls: ['./server-error.component.css']
})
export class ServerErrorComponent implements OnInit{
  constructor(private router:Router, private activatedRoute:ActivatedRoute) {

 }
 ngOnInit(): void {

    console.log("Hellow");
 }
}
