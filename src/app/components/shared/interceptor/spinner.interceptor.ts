import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { SpinnerService } from 'src/app/services/spinner.service';


@Injectable()
export class SpinnerInteractor implements HttpInterceptor{

  constructor(private spin: SpinnerService){}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spin.show();
    return next.handle(req).pipe(
      finalize(() => this.spin.hide())
    );
  }

}
