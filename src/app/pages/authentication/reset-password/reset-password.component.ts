import { Component, OnInit } from '@angular/core';
import {
	FormGroup,
	Validators,
	FormControl,
	FormBuilder
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '@app/core';
import { PasswordValidation } from '@app/core/validators/password-validation';

@Component({
	selector: 'app-reset-password',
	templateUrl: './reset-password.component.html',
	styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
	resetPasswordForm: FormGroup;
	token: string;

	constructor(
		public router: Router,
		private authenticationService: AuthenticationService,
		private formBuilder: FormBuilder,
		private route: ActivatedRoute
	) {}

	ngOnInit() {
		this.route.params.subscribe(params => {
			this.token = params['token'];
		});

		this.resetPasswordForm = this.formBuilder.group(
			{
				password: ['', Validators.required],
				confirmPassword: ['', Validators.required]
			},
			{
				validator: PasswordValidation.MatchPassword
			}
		);
	}

	resetPassword() {
		// TODO handles this when backend ready
		this.authenticationService.resetPassword(this.resetPasswordForm.value.password, this.token).subscribe(response => {
			console.log(response);
			this.router.navigate(['/login']);
		});
	}
}