import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-listsiswa-detail',
  templateUrl: './listsiswa-detail.component.html',
  styleUrls: ['./listsiswa-detail.component.css']
})
export class ListsiswaDetailComponent implements OnInit {

  constructor(
    public dialogRef:MatDialogRef<ListsiswaDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) { }

  ngOnInit(): void {
  }
  saveData()
  {
    this.dialogRef.close(this.data);
  }

}
