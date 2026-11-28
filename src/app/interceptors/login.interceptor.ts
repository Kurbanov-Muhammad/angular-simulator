import { HttpErrorResponse, HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs';

export const loginInterceptor: HttpInterceptorFn = (req, next) => {
  const startTime: number = performance.now();
  return next(req).pipe(
    tap({
      next: (event) => {
        if (event instanceof HttpResponse) {
          const duration: number = Math.round(performance.now() - startTime);
          console.log(`${req.method} ${req.url} ${event.status} ${duration}ms`);
        }
      },
      error: (error: HttpErrorResponse) => {
        const duration: number = Math.round(performance.now() - startTime);
        console.error(`${req.method} ${req.url} ${error.status} ${duration}ms`);
      },
    }),
  );
};
