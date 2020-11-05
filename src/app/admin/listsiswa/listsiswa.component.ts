import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ListsiswaDetailComponent } from '../listsiswa-detail/listsiswa-detail.component';
import {ApiService} from 'src/app/services/api.service'; 

@Component({
  selector: 'app-listsiswa',
  templateUrl: './listsiswa.component.html',
  styleUrls: ['./listsiswa.component.css']
})
export class ListsiswaComponent implements OnInit {
  title:any;
  siswa:any={};
  siswaa:any=[];

  constructor(
    public dialog:MatDialog,
    public api:ApiService
  ) { 
   
  }

  ngOnInit(): void {
    console.log(this.api.get());
    this.title='Student List';
    this.siswa={
      nama:'aaaaaaaaaaa',
      kelas:'a',
      mapel:'apaaja',
      hp:'082314564132',
      email:'apa@gmail.com'
    };
    this.getSiswa();
  }
  getSiswa()
  {
    // this.api.get('siswaa').subscribe(result=>{
    //   this.siswaa=result;
    // })
    this.siswaa=[
      {
        nama:'aaaaaaaaa',
      kelas:'A',
      mapel:'aaaaa',
      hp:'082314564132',
      email:'apa@gmail.com'
        
      },
      {
        nama:'bbbbbbbbbbbb',
        kelas:'A',
        mapel:'bbbbb ',
        hp:'085643111225',
        email:'apa@gmail.com'
        
      }
    ];
  }
  listsiswaDetail(data,idx)
  {
    let dialog=this.dialog.open(ListsiswaDetailComponent, {
      width:'400px',
      data:data
    });
    dialog.afterClosed().subscribe(res=>{
      if(res)
      {
        //jika idx=-1 (penambahan data baru) maka tambahkan data
        if(idx==-1)this.siswaa.push(res);
        //jika tidak maka perbarui data
        else this.siswaa[idx]=res;
      }
    })
  }
  deleteListsiswa(idx)
  {
    var conf=confirm('Delete item?');
    if(conf)
    this.siswaa.splice(idx,1);
  }
  
}
