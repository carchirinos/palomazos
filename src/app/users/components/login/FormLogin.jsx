import {Box, Button, Grid, TextField, Typography} from "@mui/material";
import { Link } from "react-router-dom";
import { linkOption } from "../../../shared/utils/router/paths.js";
import { css } from "@emotion/react";
import { useFormik } from "formik";
import {userLoginSchema} from "../../validation/UserSchemas.jsx";

const styles = {
    link: css`
        color: var(--link-color);
      cursor: pointer;
    `
}

export const FormLogin = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: userLoginSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Correo electrónico"
                name="email"
                autoComplete="email"
                autoFocus
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Login
            </Button>
            <Grid container>
                <Grid item>
                    <Typography component="p" variant="body2">
                        No tienes una cuenta?
                        <Link to={ `${linkOption[`Registro`]()}` } style={{ fontWeight: 400}} >
                            <span css={ styles.link }> Registrate </span>
                        </Link>
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}